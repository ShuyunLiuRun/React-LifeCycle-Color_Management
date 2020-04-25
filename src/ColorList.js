import React from 'react'
import Color from './Color'

const ColorList = ({ colors=[],onRemove=f=>f,onRate=f=>f }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a color)</p> :
            colors.map(color => 
                <Color key={color.id} 
                        {...color}
                        // onRate和onRemove的用法可以在这里设置
                        // 也可以在下层组件里设置
                        // 在上层组件设置好可以一路传下去,优点或许是可以减少传递一些属性给下层

                        //原例中把onRate变成了只需要一个参数（rating）的函数
                         //onRate={(rating) => onRate(color.id,rating)}
                        // onRemove={()=> onRemove(color.id)}
                        onRemove={onRemove}
                        onRate={onRate}
                        />
                )}
    </div>

export default ColorList