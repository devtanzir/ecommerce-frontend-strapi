
const LKV = ({keyName, value}: {keyName: string, value: string | number}) => {
    return (
        <div>
            <p className="text-sm opacity-80"><strong>{keyName}:</strong>  {value}</p>
        </div>
    );
};

export default LKV;