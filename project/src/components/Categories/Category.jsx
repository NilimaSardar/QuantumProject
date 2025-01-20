import React from 'react'
import styled from 'styled-components'

function Category() {
  return (
    <CategoryStyle>
        <h2>Explore Food Categories</h2>
        <p>Satisfy your Cravings Differently</p>
        <div className='item'>
            <div className='back'></div>
            <div className='category-all'>
                <div className='category'>
                    <img src="Images/Burger.png" alt="" />
                </div>
                <div className='product-name'>
                    <h5>Burger</h5>
                    <p>27 Items</p>
                </div>
            </div>
            <div className='front'></div>
        </div>

    </CategoryStyle>
  )
}

export default Category

const CategoryStyle = styled.div`
    background-color: grey;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .category-all{
        position: relative;
        /* background-color: red; */
        border-radius: 30px;
        height: 150px;
        width: 200px;
    }
    .product-name{
        position: absolute;
        height: 150px;
        width: 200px;
        border-radius: 30px;
        background-color: orange;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .category{
        position: absolute;
        background-color: white;
        border-radius: 50%;
        height: 75px;
        width: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        top: -15px;
        right: 65px;
    }


    .category img{
       height: 40px;
       width: auto;
    }


`;