import React, { Component } from 'react';

import './App.css'
import imglist from './constant/imglist.json';
import Modal from './components/Modal/Modal';

class App extends Component {

  constructor() {
    super();

    this.state = {
      isShowing: false,
      selectImage : 0,
    }
  }

  openModalHandler = (v) => {
    this.setState({
      isShowing: true,
      selectImage : parseInt(v) ,
    });
  }

  nextImage = () =>{
    let imageCount = this.state.selectImage;
    imageCount++;
    this.setState({ selectImage: imageCount })
  }
  previousImage = () => {
    let imageCount = this.state.selectImage;
    imageCount--;
    this.setState({ selectImage: imageCount })
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  render() {
    return (
      <div>
        {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

        <div className="img-full-div ">
          {Object.keys(imglist).map((v, i) => <div onClick={() => this.openModalHandler(v)} className="img-item" key={v}>
            <img src={imglist[v].thumbnail} alt={imglist[v].author} />
          </div>
          )}
        </div>

        <Modal
          className="modal"
          show={this.state.isShowing}
          selectedImage={this.state.selectImage}
          nextImage={this.nextImage}
          previousImage={this.previousImage}
          close={this.closeModalHandler}>
          </Modal>
      </div>
    );
  }
}

export default App;
