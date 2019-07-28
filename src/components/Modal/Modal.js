import React, { Component } from 'react';

import './Modal.css';

import imglist from './../../constant/imglist.json';

class Modal extends Component {
    
    state = {
        selectedImage: this.props.selectedImage
    };

    componentDidUpdate(prevProps) {
        if (prevProps.selectedImage !== this.props.selectedImage) {
            this.setState({ selectedImage: this.props.selectedImage });
        }
    }

    render(){
        const {props} =  this;
    
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <div className="modal-wrapper"
                    style={{
                        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    
                    <div className="modal-body">
                        <table width="100%">
                            <tbody>
                                <tr width="100%">
                                    <td width="1%"><button className="button-css" disabled={(props.selectedImage > 0) ? false : true} onClick={this.props.previousImage}>‹</button></td>

                                    <td width="98%">
                                        <div className="img-popup">
                                            {props.selectedImage !== '' && <img src={imglist[props.selectedImage].download_url} alt={imglist[props.selectedImage].author} />}
                                        </div>
                                    </td>
                                    <td width="1%"><button className="button-css" disabled={(props.selectedImage !== imglist.length - 1) ? false : true} onClick={this.props.nextImage}>›</button></td>
                                </tr>
                            </tbody>
                            
                        </table>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
