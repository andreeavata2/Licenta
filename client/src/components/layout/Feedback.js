import React, { Component } from 'react';
import "../../assets/js/feedback";

export default class Feedback extends Component {
    render() {
        return (
            <div id="feedback">
                <div id="feedback-form" style={{ display: "none" }} class="col">
                    <form method="POST" action="/feedback" class="form panel-body" role="form">
                    <div class="form-group">
                            <input class="form-control" name="name" autofocus placeholder="Your name" type="text" />
                        </div>
                        <div class="form-group">
                            <input class="form-control" name="email" autofocus placeholder="Your e-mail" type="email" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="body" required placeholder="Please write your feedback here..." rows="5"></textarea>
                        </div>
                        <button class="btn btn-primary pull-right" type="submit">Send</button>
                    </form>
                </div>
                <div id="feedback-tab">Feedback</div>
            </div>
        )
    }
}
