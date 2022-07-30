import InnerCard from "./InnerCard";

function Card() {
    return (
        <div className="flex flex-col border p-12 w-1/3 space-y-10 transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
            <InnerCard />
            <InnerCard />
            <InnerCard />
        </div>
    )
}

export default Card;
