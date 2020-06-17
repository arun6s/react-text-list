import React, { Component } from "react";
import "./list.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      pageNo: 1,
      pageSize: 12,
    };
  }

  componentDidMount() {
    this.getListItems();
  }

  getListItems = () => {
    const { pageNo, pageSize } = this.state;
    let url = `https://testapi.tihlc.com/v2/api/Content/GetAll?pageNo=${pageNo}&pageSize=${pageSize}`;
    fetch(url)
      .then((lists) => lists.json())
      .then((lists) => {
        console.log(lists);
        this.setState({
          lists: lists.Contents,
        });
      });
  };

  prevPage = () => {
    this.setState(
      {
        pageNo:
          this.state.pageNo > 1 ? this.state.pageNo - 1 : this.state.pageNo,
      },
      () => this.getListItems()
    );
  };

  nextPage = () => {
    this.setState(
      {
        pageNo: this.state.pageNo + 1,
      },
      () => this.getListItems()
    );
  };

  SignOutUser = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  render() {
    return (
      <div className='content'>
        <div className='button-toolbar'>
          <button type='button' onClick={this.SignOutUser}>
            Sign Out
          </button>
        </div>
        <div className='listItem'>
          {this.state.lists.map((list) => {
            const {
              Name,
              Category,
              AddNotes,
              Cost,
              Email,
              MobileNo,
              CreatedTime,
            } = list;
            return (
              <div className='list' key={list.ContentID}>
                <h2>{Name}</h2>
                <h3>{Category}</h3>
                <h4>{AddNotes}</h4>
                <p>
                  <strong>{Cost}</strong>
                </p>
                <div className='author'>
                  <p>{Email}</p>
                  <p>{MobileNo}</p>
                  <p>{CreatedTime}</p>
                </div>
              </div>
            );
          })}
        </div>
        {this.state.lists.length == 0 ? (
          <h2 style={{ "text-align": "center" }}>You Reached the end</h2>
        ) : (
          ""
        )}
        <div className='button-toolbar'>
          <button type='button' onClick={this.prevPage}>
            &laquo;
          </button>
          <button type='button' onClick={this.nextPage}>
            &raquo;
          </button>
        </div>
      </div>
    );
  }
}
