import "./styles.css"
import React from 'react'
import { Formik } from 'formik'

const Input = ({ itemId, addItem }) => {
    return (
        <Formik
            initialValues={{
                comment: '',
            }}
            onSubmit={async ({ comment }, actions) => {
                await addItem(itemId, comment);

                actions.resetForm({
                    values: {
                        comment: '',
                    },
                })
            }}
        >
            {({ values, handleChange, handleSubmit, dirty }) => {
                return (
                    <div>
                        <input
                            className="form-control"
                            type="text"
                            name={"comment"}
                            onChange={handleChange}
                            value={values.comment}
                            placeholder="Comment"
                            autoComplete="off"
                        ></input>
                        <button
                            className="submitForm"
                            disabled={!dirty}
                            onClick={handleSubmit}
                            type={"submite"}
                        >
                            Submit Comment
                        </button>
                    </div>
                )
            }}
        </Formik>
    )
}

export default Input