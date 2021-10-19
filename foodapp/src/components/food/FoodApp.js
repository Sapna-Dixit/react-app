import React,{useState,useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import tryImage from  '../../assert/images/tryFood.jpg';
import { loadData } from '../../redux/foodRedux/food.actions';
import { FOOD_KEY } from '../../redux/foodRedux/food.reducer';

const FoodApp =() =>{
    //initialized dispatch
    let dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(loadData())
    // },[])

    //bins input
    let [nationality, setNationality] = useState({
        foodName : ''
    })

    let handleChange = (event)=>
    {
        setNationality({
            ...nationality,
            [event.target.name]:event.target.value
        })
    }

    // view store
    let viewFood = useSelector((state)=>{
        return state[FOOD_KEY]
    })

    //handle submit

    let handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(loadData(nationality.foodName))
        

    }
    return(
        <React.Fragment>
            <pre>{JSON.stringify(viewFood)}</pre>
            <div className="card">
                <div className="card-header">
                    <h5>SEARCH FOOD APP -  By Nationality</h5>
                </div>
                <div className="card-body">
                    <div className="body-section centered">
                        <form className="form-horizontal" onSubmit = {handleSubmit}>
                            <div className="form-group">
                                <input 
                                name = "foodName"
                                type = "text"
                                value ={nationality.foodName}
                                onChange = {handleChange}
                                placeholder ="Enter your nationality"/>   
                                <input 
                                type = "submit"
                                className = "btn btn-success"
                                value = "Search"/>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="card-footer">
                    {
                        (viewFood.data.length)===0 ? null :
                        <React.Fragment>
                            {
                                viewFood.data.meals.map((item)=>{
                                    return(
                                        <div key={item.idMeal}>
                                            <div className = "foodContainer">
                                                  <div className = "imgContainer">
                                                      <img src = {item.strMealThumb} 
                                                      alt ='' 
                                                      width='250px' 
                                                      height='150px'/>
                                                </div>
                                          <div className = "nameContainer">
                                         <p>{ item.strMeal }</p>
                                        </div>

                                         </div>
                                        </div>
                                    )
                                })
                            }
                        </React.Fragment> 
                    }
                </div>

            </div>
        </React.Fragment>
    )
}
export default FoodApp;