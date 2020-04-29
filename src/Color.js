import React from 'react';
import StarRating from './StarRating';
import propTypes from 'prop-types';

export class Color extends React.Component{
  /**
   * while running this code, the user can rate any of the colors. All the 
   * background color will be changed, although the user changed only one color.
   * 
   * If the user add a new color, the new color will remain the initial bgc.
   * But the other colors' bgc will be removed
   */
    // Background color will be set initially as grey. 
    // If use CWM only, background color will not change.
    UNSAFE_componentWillMount(){
    this.style = { backgroundColor:"#CCC" }
  }
  //return true when the component should be updated
  shouldComponentUpdate(nextProps){
    const {rating} = this.props
    return rating !== nextProps.rating
  }
  /**
   * According to the book, the title of the color will be 
   * changed in the meanwhile of the alert jumping out. 
   * After closing the alert, the component will be updated.
   * Then the title will be changed again according to the settings
   * in the componentDidUpdate.
   * 
   * But in the exercise, the color title will not be changed 
   * while the alert showing.  
   *  
   * These two methods are both in charge of interact DOM 
   * after component updating. 
   */
  UNSAFE_componentWillUpdate(nextProps){
    const { title, rating } = this.props
    this.style=null
    this.refs.title.style.backgroundColor = "red"
    this.refs.title.style.color = "white"
    alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
  }
  componentDidUpdate(prevProps){
    const { title, rating } = this.props
    const status = (rating>prevProps.rating) ? 'better' : 'worse'
    console.log(`${title} color is getting ${status}`)
    this.refs.title.style.backgroundColor = "blue"
    this.refs.title.color = "green"
    console.log(this)
  }
  
  render(){
    const {id, title, rating, color, onRate} = this.props
    return(
      <section className="color" style={this.style}>
      <h1 style={{display:"inline-block"}} ref="title">{title}</h1> 
      {/* <button onClick={()=>onRemove(id)}>X</button> */}
      <div className="showcolor"
            style={{ backgroundColor:color }}>
      </div>
      <div>
        <StarRating id={id} starsSelected={rating} onRate={onRate}/>
      </div>
    </section>
    )
  }
}
Color.propTypes = {
  title:propTypes.string,
  rating:propTypes.number,
  color:propTypes.string,
  onRate:propTypes.func
}
Color.defaultProps = {
  title:undefined,
  rating:0,
  color:"#000000",
  onRate: f=>f
}
// const Color = ({ id,title, color, rating=0 , onRemove=f=>f, onRate=f=>f}) =>
//   <section className="color">
//     <h1 style={{display:"inline-block"}}>{title}</h1> <button onClick={()=>onRemove(id)}>X</button>
//     <div className="showcolor"
//           style={{ backgroundColor:color }}>
//     </div>
//     <div>
//       <StarRating id={id} starsSelected={rating} onRate={onRate}/>
//     </div>
//   </section>

export default Color;
