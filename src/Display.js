import React from 'react'
import ReactDOM from 'react-dom'

const { Children, PropTypes } = React
const { render } = ReactDOM

//处理并返回了props.children
const findChild = (children, child) =>
    Children.toArray(children)
            .filter(c => c.type ===child)[0]

//           组件WhenTruthy的props的children (在下面render里被生成)
//                      ^
//                      |
const WhenTruthy = ({children}) =>
//Verifies that children has only one child (a React element) and returns it.
    Children.only(children)

const WhenFalsy = ({children}) =>
    Children.only(children)

//从findchild的props.children被传递给Display
//Display的props.children被设置成只有一个结果的最终形态
const Display = ({ifTruthy=true, children}) =>
    (ifTruthy)?
        findChild(children, WhenTruthy) :
        findChild(children, WhenFalsy)

const age = 19

//render里的东西并不会直接反映在DOM
render(
    <Display ifTruthy={age>=21}>
        <WhenTruthy>
            <h1>You can enter</h1>
        </WhenTruthy>
        <WhenFalsy>
            <h1>Beat it kid</h1>
        </WhenFalsy>
    </Display>,
    document.getElementById("test")
)

export default Display