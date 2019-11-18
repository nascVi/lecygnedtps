import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context';
import Title from '../components/Title';

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function ProductFilter({ products }) {
  const context = useContext(ProductContext);
  console.log(context);
  const {
      handleChange,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
  } = context;
  // get unique types
let types = getUnique(products, 'type');
// add all
types = ['all', ...types];
// map to jsx
types = types.map((item,index) => {
return <option value={item} key={index}>{item}</option>
})
let people = getUnique(products,'capacity');
people = people.map((item,index)=>{
  return <option key={index} value={item}>{item}</option>    
})
  return (
    <section className="filter-container">
            <Title title="search products"/>
            <form className="filter-form">
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">Product type</label>
                    <select 
                    name="type" 
                    id="type"
                    value={type}
                    className="form-control" 
                    onChange={handleChange} 
                    >
                    {types}
                    </select>
                </div>
                {/*end select type */}
                {/*guest */}
                    <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select 
                    name="capacity" 
                    id="capacity" 
                    value={capacity} 
                    className="form-control" 
                    onChange={handleChange}
                    >
                    {people}
                    </select>
                </div>
                {/*end guest */}
                {/*price */}
                <div className="form-group">
                <label htmlFor="price">Product Price ${price}</label>
                    <input
                    type="range"
                    name="price"
                    min={minPrice}
                    max={maxPrice}
                    id="price"
                    value={price} 
                    onChange={handleChange}
                    className="form-control" 
                    />
                </div>
                {/*end price */}
                {/*size */}
              <div className="form-group">
                <label htmlFor="size">Product size</label>
                <div className="size-inputs">
                <input
                    type="number"
                    name="minSize"
                    id="size"
                    value={minSize}
                    onChange={handleChange}
                    className="size-input" 
                    />
                <input
                    type="number"
                    name="maxSize"
                    value={maxSize}
                    id="size"
                    onChange={handleChange}
                    className="size-input" 
                    />
                </div>
              </div>
              {/*end size */}
              {/*extras */}
              <div className="form-group">
                <div className="single-extra">
                    <input
                    type="checkbox"
                    name="breackfast"
                    id="breakfast"
                    checked={breakfast}
                    onChange={handleChange}
                />
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                    <input 
                    type="checkbox" 
                    name="pets" 
                    id="pets" 
                    checked={pets} 
                    onChange={handleChange}
                />
                    <label
                    htmlFor="breakfast">pets <i>care</i></label>
                </div>
              </div>
              {/*end of extra type */}
            </form>
        </section>
    );
};
