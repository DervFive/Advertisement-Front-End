import prod1 from "../assets/images/product1.jpg"

const AdvertCard = () => {
  return (
    <>
      <div className="product">
        <div className="img-container ">
          <img src={prod1} alt="" className="w-full h-full rounded" />
        </div>
      </div>
    </>
  );
};

export default AdvertCard;
