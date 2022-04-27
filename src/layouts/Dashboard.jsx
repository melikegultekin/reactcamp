import React from 'react';
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import Navi from './Navi';
import { Grid, GridRow } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import CartDetail from '../pages/CartDetail';
import ProductDetail from '../pages/ProductDetail';

export default function Dashboard() {
  return (
    <div>
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
