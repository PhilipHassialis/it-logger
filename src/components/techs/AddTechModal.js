import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmit = () => {
        if (firstName === "" || lastName === "") {
            M.toast({ html: "Please enter technician details" });
        } else {
            // console.log(firstName, lastName);
            const newTech = {
                firstName,
                lastName
            };
            addTech(newTech);
            M.toast({ html: `Added technician ${firstName} ${lastName}` });
            // clear fields
            setFirstName("");
            setLastName("");
        }
    };

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>Enter technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="firstName" className="active">
                            First name
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-content">
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName" className="active">
                            Last name
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">
                    Enter
                </a>
            </div>
        </div>
    );
};

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
};

export default connect(
    null,
    { addTech }
)(AddTechModal);
