// import class react adn react-dom
import react,{Component} from 'react'



// class component container
class Container extends Component{
    render(){
        return (
            <section className="container">
                <CardHeader />
                <CardBody />
            </section>
        )
    }
}

// component card header container
const CardHeader = ()=>{
    return (
        <div className="item-container card-header">
            <img src="images/drawers.jpg" alt="" />
        </div>
    )
}

// card body container
const CardBody = ()=>{
    return (
        <div className="item-container card-body">
            
        </div>
    )
}

export default Container;