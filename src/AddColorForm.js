import React from 'react'

const AddColorForms = ({onNewColor=f=>f}) => {
    let _title, _color
    const submit = e=>{
        e.preventDefault()
        //点击submit时 onNewColor（也就是AddColorForm的属性）发生改变。 
        //这也将告知其父组件（App）， 某个按钮被点击了。所有属性变动都会反映到其根组件
        onNewColor(_title.value , _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    return (
        <form onSubmit = {submit} >
            <input ref={input => _title=input}
                    type="text"
                    placeholder="color title..." required/>
            <input ref={input => _color=input} 
                    type="color" required/>
            <button>Add</button>
            
        </form>
    )
}

export default AddColorForms