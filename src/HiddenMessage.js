import React from 'react'
/**
 * 当父组件修改hide属性时， 这一变更不会自动导致HiddenMessage的State发生变化。
 * componentWillReciveProps是为了这类场景存在的。
 * 它会在属性被父组件修改时被触发。并且这些变更的属性可以用来修改内部的state。
 * 
 * 当父组件HiddenMessages修改了hide的属性，componentWillReceiveProps方法允许用户对
 * 相应的State进行更新。
 * 
 * The reason using State in the child component is to exercise using componentWillReceiveProps 
 * changing the state in child component. Otherwise we should use stateless component instead.
 */

class HiddenMessage extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            hidden: true
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        this.setState({hidden: nextProps.hide})
    }
    render(){
        const {children} = this.props
        const {hidden} = this.state
        return(
            <p>
                {(hidden) ? 
                    children.replace(/[a-zA-Z0-9]/g, "x") :
                    children
                }
            </p>
        )
    }
}

export default HiddenMessage 