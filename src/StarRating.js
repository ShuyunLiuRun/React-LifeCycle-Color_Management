import React from 'react'
import Star from './Star'

const StarRating = ({id,starsSelected=0,totalStars=5,onRate=f=>f}) =>
    <div className="star-rating">
    {/* 将扩展运算符和Array构造函数一起使用，从而初始化一个
    长度特定的数组。这个数组需要被用来映射Stars */}
        {[...Array(totalStars)].map((n,i) =>
            <Star key={i}
                    selected={i<starsSelected}
                    //onClick={()=> onRate(i+1)}
                    onClick={()=> onRate(id,i+1)} /> 
        )}
        <p>{starsSelected} of {totalStars}</p>
    </div>

export default StarRating