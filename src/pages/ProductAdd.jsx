import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, FormField, Label } from 'semantic-ui-react';
import KodlamaioTextInput from '../utilities/customFormControls/KodlamaioTextInput';

export default function ProductAdd() {
  const initialValues={productName:"",unitPrice:10}

  const shema = Yup.object({
      productName:Yup.string().required("Ürün adı zorunlu"),
      unitPrice:Yup.number().required("Ürün fiyatı zorunlu")
  })

  return (
      <Formik initialValues={initialValues} validationSchema = {shema} onSubmit ={(values)=>{console.log(values)}}>
        <Form className='ui form'>
          <KodlamaioTextInput name='productName' placeholder='Ürün Adı' />
          <KodlamaioTextInput name='unitPrice' placeholder='Ürün Fiyatı' />
          <Button color="blue" type="submit">Ekle</Button>
        </Form>

      </Formik>
  )
}
