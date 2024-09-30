import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './ControlledForm.css'

function ControlledForm() {
  const validateSchema = Yup.object({
    name: Yup.string()
      .required("Имя обязательно")
      .min(1, "Поле не должно быть пустым"),
    email: Yup.string()
      .email("Некорректный email")
      .required("Email обязателен")
    
  });

  return (
    <>
    
    <Formik
        initialValues={{ name: "", email: ""}}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
    >
        <Form>
          <div className='form'>
          <div>
            <label>Имя</label>
            <Field name="name" type="text"/>
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div >
            <label>Email</label>
            <Field name="email" type="email"/>
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          
          <button type="submit" className="submitBtn">Оправить</button>
          </div>
        </Form>
    </Formik>
    
    </>
  );
}
export default ControlledForm;
