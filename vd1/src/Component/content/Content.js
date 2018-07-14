import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
            this.state = {
                trangThai:0
        }
    }
renderButton = () => (
    <div className="container">
        <div className="row">
        <div className="btn btn-group">
            <div className="btn btn-info" onClick={()=>this.editClick()} >Edit</div>
            <div className="btn btn-warning">Remove</div>
        </div>
        </div>
    </div>
    )
renderForm = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="form-group">
            <input defaultValue={this.props.tieude} className="form-control" type="text" name="ten"/>
            <div className="btn btn-danger" onClick={() => this.saveClick()}>Save</div>
            </div>
        </div>
        </div>
    )
    }
displayCheck = () => {
    if(this.state.trangThai === 0){
        return this.renderButton();
    }else{
        return this.renderForm();
    }
}
editClick = () => {
    this.setState({trangThai:1});
}
saveClick = () => {
    this.setState({trangThai:0});
    }
    
render() {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={"col-lg-6 " + this.props.vitri1}>
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={this.props.anh} alt="" />
                        </div>
                        </div>
                        <div className={"col-lg-6 " + this.props.vitri2}>
                        <div className="p-5">
                            <h2 className="display-4">{this.props.tieude}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            {this.displayCheck()}
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;