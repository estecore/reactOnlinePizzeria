import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

// export default function App() {
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//     // fetch('http://localhost:3000/db.json')
//     //   .then((resp) => resp.json())
//     //   .then((json) => {
//     //     setPizzas(json.pizzas);
//     //   });
//   }, []);

//   return;
// }

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }
//   render() {
//     // return (
//     //   <div className="wrapper">
//     //     <Header />
//     //     <div className="content">
//     //       <Routes>
//     //         <Route path="/" element={<Home items={this.props.items} />} exact />
//     //         <Route path="/cart" element={<Cart />} />
//     //       </Routes>
//     //     </div>
//     //   </div>
//     // );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   };
// };
// // const mapDispatchToProps = {
// //   setPizzas,
// // };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
