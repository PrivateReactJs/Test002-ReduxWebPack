import React, { Component } from "react";

class ItemList extends Component {
    constructor() {
        super();
        this.state = {
            url:"http://5826ed963900d612000138bd.mockapi.io/items",
            items: [],
            hasErrored: false,
        };
    }
    fetchData(url) {
        this.setState({ isLoading: true });
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                this.setState({ isLoading: false });
                return response;
            })
            .then((response) => response.json())
            .then((items) => (this.setState({ items })))
            .catch(() => this.setState({ hasErrored: true }));
    }
    componentDidMount() {
        console.log("will fetch data");
        this.fetchData(this.state.url);
        console.log(this.state.items);
    }
    __render() {
        console.log(this.state.items);
        console.log(this.state.hasErrored);
        const articles = this.state.items.map((key) =>
            <li key={key.id}>{key.label}</li>
        );
        return (
            <ul>{articles}</ul>

        )
    }

    render() {
        if (this.state.hasErrored) {
            return <p>Sorry! There was an error loading the items {this.state.url}</p>;
        }
        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.state.items.map((item) => (
                    <li key={item.id}>
                        xxxx {item.label}
                    </li>
                ))}
            </ul>
        );
    }    
}

export default ItemList;