import React, { Component } from 'react';
import Vue from 'vue-react';
// import "/socket.io/socket.io.js";
// let express = require('express');
// let http = require('http').createServer(app);
// let io = require('socket.io');
// const router = express.Router();

import MessengerCustomerChat from 'react-messenger-customer-chat';

export default class Chat extends Component {
    render() {
        return (
            <>
                <p>Cevaaaa</p>
                {/* <div class="container">
                    <div class="jumbotron">
                        <h1 class="display-4">Send Message</h1>
                        <input id="name" class="form-control" placeholder="Name" />
                        <textarea id="message" class="form-control" placeholder="Your Message Here"></textarea>
                        <button id="send" class="btn btn-success">Send</button>
                    </div>
                    <div id="messages">

                    </div>
                </div> */}


                <div id="app">
                    <div class="container">
                        <div class="col-lg-6 offset-lg-3">

                            <div v-if="ready">
                                <p v-for="user in info">
                                    {/* {vue.data.username} {vue.data.type} */}
                                </p>
                            </div>

                            <div v-if="!ready">
                                <h4>Enter your username</h4>
                                <form >
                                    <div class="form-group row">
                                        <input type="text" class="form-control col-9" v-model="username"
                                            placeholder="Enter username here" />
                                        <input type="submit" value="Join" class="btn btn-sm btn-info ml-1" />

                                    </div>
                                </form>
                            </div>
                            <h2 v-else>
                                {/* { vue.data.username } */}
                            </h2>
                            <div class="card bg-info" v-if="ready">
                                <div class="card-header text-white">
                                    <h4>My Chat App <span class="float-right">
                                        {/* { vue.data.connections }  */}
                                        connections</span></h4>
                                </div>
                                <ul class="list-group list-group-flush text-right">
                                    <small v-if="typing" class="text-white">
                                        {/* {vue.data.typing } */}
                                         is typing</small>
                                    <li class="list-group-item" v-for="message in messages">
                                        <span>
                                            {/* {vue.message.message} */}
                                            <small>:
                                                {/* {vue.message.user} */}
                                            </small>
                                        </span>
                                    </li>
                                </ul>

                                <div class="card-body">
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control" v-model="newMessage"
                                                placeholder="Enter message here" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* <MessengerCustomerChat
                    pageId="1895382890692545"
                    appId="215971755540323"
                /> */}
            </>
        )
    }
}
