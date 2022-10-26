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
            <h3 className="title-card-body">
                Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </h3>
            <p className="desc-card-body">
                Ever been in a room and felt like something was missing? perhaps it felt slightly bare and uninvting. I've got some simple tips to help you make any room feel complete
            </p>
            <div className="card-body-footer">
                <div className="card-footer-img">
                    <img src="images/avatar-michelle.jpg" alt="" />
                </div>
                <div className="card-footer-desc">
                   <p>Michelle appletion</p>
                   <span className="date">
                       28 jun 2022
                   </span>
                </div>
                <button className="card-footer-share">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
                </button>
            </div>
        </div>  
    )
}

export default Container;