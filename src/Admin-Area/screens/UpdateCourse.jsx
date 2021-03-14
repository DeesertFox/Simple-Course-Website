import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Button,
  Label,
  Col,
} from "reactstrap";
import { Formik, Field, Form } from "formik";
import UpdateCourse from "../../Components/services/api/Admin-area/Courses/UpdateCourse.api";
import * as Yup from "yup";
import EachTerm from "../../Components/services/api/course/eachTerm.api";
const Home = (props) => {
  const [initialState, setinitialState] = useState({
    title: "",
    cost: "",
    endDate: "",
    startDate: "",
    capacity: "",
    teacher: "",
    course: "",
  });
  const CourseInformation = async () => {
    const user = await EachTerm(props.match.params.id);
    setinitialState((state) => ({
      ...state,
      title: user.title,
      cost: user.cost,
      endDate: user.endDate,
      startDate: user.startDate,
      capacity: user.capacity,
      teacher: user.teacher.fullName,
      course: user.course.courseName,
    }));
  };
  const formSchema = Yup.object().shape({
    title: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    cost: Yup.number("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    endDate: Yup.string()
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    startDate: Yup.string()
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    capacity: Yup.number("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    teacher: Yup.string().required("این فیلد اجباریست"),
    course: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
  });

  const UpdateCourse = async (data) => {
    const course = {
      title: data.title,
      cost: data.cost,
      endDate: data.endDate,
      startDate: data.startDate,
      capacity: data.capacity,
      teacher: data.teacher,
      course: data.course,
    };
    await UpdateCourse(course);
  };

  useEffect(() => {
    CourseInformation();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle> </CardTitle>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={initialState}
          enableReinitialize={true}
          validationSchema={formSchema}
          onSubmit={(value) => UpdateCourse(value)}
        >
          {({ errors, touched }) => (
            <Form>
              <FormGroup className="my-3">
                <Label for="title">نام دوره</Label>
                <Field
                  name="title"
                  id="required"
                  className={`form-control ${
                    errors.title && touched.title && "is-invalid"
                  }`}
                />
                {errors.title && touched.title ? (
                  <div className="invalid-tooltip mt-25">{errors.title}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="cost">قیمت</Label>
                <Field
                  type="text"
                  name="cost"
                  id="cost"
                  className={`form-control ${
                    errors.cost && touched.cost && "is-invalid"
                  }`}
                />
                {errors.cost && touched.cost ? (
                  <div className="invalid-tooltip mt-25">{errors.cost}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="url">تاریخ پایان</Label>
                <Field
                  name="endDate"
                  id="endDate"
                  className={`form-control ${
                    errors.endDate && touched.endDate && "is-invalid"
                  }`}
                />
                {errors.url && touched.url ? (
                  <div className="invalid-tooltip mt-25">{errors.endDate}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="startDate">شروع دوره</Label>
                <Field
                  name="startDate"
                  id="startDate"
                  className={`form-control ${
                    errors.startDate && touched.startDate && "is-invalid"
                  }`}
                />
                {errors.startDate && touched.startDate ? (
                  <div className="invalid-tooltip mt-25">
                    {errors.startDate}
                  </div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3 ">
                <Label for="date">ظرفیت</Label>
                <Field
                  type="text"
                  name="capacity"
                  id="capacity"
                  className={`form-control ${
                    errors.capacity && touched.capacity && "is-invalid"
                  }`}
                />
                {errors.capacity && touched.capacity ? (
                  <div className="invalid-tooltip mt-25">{errors.capacity}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="teacher">نام استاد</Label>
                <Field
                  name="teacher"
                  id="teacher"
                  className={`form-control ${
                    errors.teacher && touched.teacher && "is-invalid"
                  }`}
                />
                {errors.teacher && touched.teacher ? (
                  <div className="invalid-tooltip mt-25">{errors.teacher}</div>
                ) : null}
              </FormGroup>
              <FormGroup className="my-3">
                <Label for="course">نام کورس</Label>
                <Field
                  name="course"
                  id="course"
                  className={`form-control ${
                    errors.course && touched.course && "is-invalid"
                  }`}
                />
                {errors.course && touched.course ? (
                  <div className="invalid-tooltip mt-25">{errors.course}</div>
                ) : null}
              </FormGroup>
             <button className="btn btn-success" type="submit">ثبت</button>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default Home;
