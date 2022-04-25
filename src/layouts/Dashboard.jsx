import React from 'react';
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import Navi from './Navi';
import { Grid, GridRow } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column with={4}>
            <Categories/>
          </Grid.Column>
          <Grid.Column with={12}>
            <ProductList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
