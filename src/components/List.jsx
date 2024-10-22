import React from 'react'

const List = () => {
  return (
    <div className="products-display flex justify-center gap-2 w-full overflow-auto mt-auto scrollbar-thin scrollbar-thumb-[#ebd451e1] scrollbar-track-gray-300">
    <div className="product">
      <div className="img-container ">
        <img src={prod1} alt="" className="w-full h-full rounded" />
      </div>
    </div>
    <div className="product">
      <div className="img-container">
        <img src={prod1} alt="" className="w-full rounded" />
      </div>
    </div>
    <div className="product">
      <div className="img-container">
        <img src={prod1} alt="" className="w-full rounded" />
      </div>
    </div>
    <div className="product">
      <div className="img-container">
        <img src={prod1} alt="" className="w-full rounded" />
      </div>
    </div>
    <div className="product">
      <div className="img-container">
        <img src={prod1} alt="" className="w-full rounded" />
      </div>
    </div>
  </div>
  )
}

export default List