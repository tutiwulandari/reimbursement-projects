import {useState} from "react";
import {Button, Modal, ModalFooter,} from "reactstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import {Form} from "react-bootstrap";
import { useForm } from "react-hook-form";



const ForgetPassword = (props) => {
    const {handleSubmit, errors} = useForm();
    const  className = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)

        return(
               <div>
                   <a className="pass" onClick={toggle} href="#" style={{textAlign:"right", color:"#292961"}}>
                       Forgot Password?</a>
                   <Modal isOpen={modal} toggle={toggle} className={className} >
                       <ModalHeader toggle={toggle} color="#292961" style={{fontWeight:"bold",fontSize:"20px"}}>Forgot your password?</ModalHeader>
                       <Form className="forget" >
                           <formgroup>
                               <p> Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                               <label htmlFor="email" style={{marginTop:"-30px", fontSize:"18px", width:"300px", fontWeight:"bold"}}><br/>Your Email</label>
                               <br/>
                               <input type="email" name="email" style={{width:"400px"}} placeholder="example@company.com" required="required"/>
                           </formgroup>
                       </Form>

                       <ModalFooter>
                           <Button className="btn-submit" onClick={toggle} required="required">Submit</Button>
                           <Button color="secondary" onClick={toggle} type="cancel">Cancel</Button>

                       </ModalFooter>
                   </Modal>
               </div>
        )
    }
export default ForgetPassword;