import React from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const Taskform = ({ add, length }) => {

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape({
        name: Yup.string().min(5, 'La tarea debe ser superior a 5 letras').required('El nombre de la tarea es obligatorio'),
        description: Yup.string().min(10, 'La descripcion debe ser mayor a 10 caracteres').max(30, 'La descripcion solo comprende 30 caracteres').required('La descripcion es obligatoria'),
        level: Yup.string().oneOf([LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT], 'Debes seleccionar un level').required('Nivel de tarea obligatorio')
    })

    function addTask(values) {
        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
        )
        add(newTask)
    }

    return (
        <div>
            <h4>Agregar una tarea</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={(values) => {
                    addTask(values)
                }}
            >
                {
                    ({ touched, errors, isSubmitting, handleChange, handleBlur }) => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field name="name" placeholder="Ingrese el nombre" />

                            {/* name errors */}
                            {
                                errors.name && touched.name && (
                                    <div>
                                        <ErrorMessage name='name' />
                                    </div>
                                )
                            }

                            <label htmlFor="description">Description</label>
                            <Field name="description" placeholder="ingrese una descripcion" />

                            {/* description errors */}
                            {
                                errors.description && touched.description && (
                                    <div>
                                        <ErrorMessage name='description' />
                                    </div>
                                )
                            }

                            <Field as="select" name="level">
                                <option value={LEVELS.NORMAL}>Normal</option>
                                <option value={LEVELS.URGENT}>Urgent</option>
                                <option value={LEVELS.BLOCKING}>Blocking</option>
                            </Field>

                            <button type="submit" >
                                Agregar Tarea
                            </button>
                            {isSubmitting ? (<p> Sending credentials...</p>) : null}
                        </Form>
                    )
                }
            </Formik>
        </div >
    )
}

Taskform.ProtoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
