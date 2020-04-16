import React, { Fragment } from "react";

function InputField() {

    return (
        <Fragment>
            <form action="">
                <div className="input-field">
                    <input type="file" className="custom-file-input" id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                    </label>
                </div>
                <input type="submit" value="upload" className="custom-file-btn" />
            </form>

        </Fragment>
    );
}

export default InputField;