import React from "react";
import VisibilitySensor from "react-visibility-sensor";

export default class FadeInWhenVisible extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: 0, disable: false };
    }

    onChange(isVisible) {
        if (isVisible && this.state.visible === 0) {
            setTimeout(() => {
                this.setState({ visible: 1 });
            }, 250);
        }
    }

    componentDidMount() {
        if (window.location.href.includes("#projects")) {
            this.setState({ visible: 1, disable: true });
        }
    }

    render() {
        return (
            <>
                <VisibilitySensor
                    partialVisibility
                    onChange={this.onChange.bind(this)}
                >
                    <div
                        className={!this.state.disable && "fade-in-div"}
                        style={{
                            opacity: this.state.visible,
                        }}
                    >
                        {this.props.children}
                    </div>
                </VisibilitySensor>
                <style jsx>
                    {`
                        .fade-in-div {
                            opacity: 0;
                            transition: opacity 1s ease-in-out;
                        }
                    `}
                </style>
            </>
        );
    }
}
