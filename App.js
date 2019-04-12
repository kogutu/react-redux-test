import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import { klikniecie,dodajdwa } from './magazyn';

import { getproduct } from './produkty';


class App extends Component {

  render() {
            let itemList = this.props.stan_produkty.produkty.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

    return (
      <div className="App">

      <button onClick={this.props.klikniecie}>
        Licznik = {this.props.stan_redux.licznik}
      </button>
            <button onClick={this.props.getproduct}>
        Produkty
      </button>
      {itemList} 
      </div>
    );
  }
}


//export default App;
const mapStateToProps = (stanMagazynu) => {
 console.log(stanMagazynu)
  return {
    stan_redux : stanMagazynu.naszReducer,
    stan_produkty : stanMagazynu.reducer
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {  klikniecie, getproduct },
  dispatch
)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
