import { createId } from "@/lib/utils/utils";

export const userProfileData = [
    {
        id: createId(), 
        name: "My Account",
        path: "/profile"
    },
    {
        id: createId(), 
        name: "My Orders",
        path: "/profile"
    },
    {
        id: createId(), 
        name: "Settings",
        path: "/profile"
    },
    {
        id: createId(), 
        name: "Favourites",
        path: "/profile"
    },
    {
        id: createId(), 
        name: "Delivery Addresses",
        path: "/profile"
    },
    {
        id: createId(), 
        name: "Billing Data",
        path: "/profile"
    },
]