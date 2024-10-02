import Stripe from "stripe";


const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY||"", {
  typescript: true,
  apiVersion: "2024-06-20",
})


export async function POST(request:any){
    try {
        // Parsing the request body (await required)
        const data = await request.json();
    
        // Extract the amount and ensure it's a valid number
        const amount = data.amount;
        if (!amount || isNaN(amount)) {
          return new Response(JSON.stringify({ error: 'Invalid or missing amount' }), { status: 400 });
        }
    
        // Create a PaymentIntent with Stripe
        const paymentIntent = await stripe.paymentIntents.create({
          amount: Number(amount) * 100, // Convert amount to cents
          currency: 'usd',
        });
    
        // Respond with the client secret for the PaymentIntent
        return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error: any) {
        // Handle errors and return a JSON response
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
      }
}