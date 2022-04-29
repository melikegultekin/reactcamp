import React from 'react';
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import CartDetail from '../pages/CartDetail';
import ProductDetail from '../pages/ProductDetail';
import { ToastContainer } from 'react-toastify';

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column with={4}>
            <Categories/>
          </Grid.Column>
          <Grid.Column with={12}>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/products" component={ProductList}/>
            <Route path="/products/:name" component={ProductDetail}/>
            <Route path="/cart" component={CartDetail}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
