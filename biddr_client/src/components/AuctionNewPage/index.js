import React, { Component } from 'react';

class AuctionNewPage extends Component {

    handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
        const params = {
            auction: {
                title: formData.get('title'),
                description: formData.get('description'),
                reserve_price: formData.get('reserve_price'),
                ends_at: formData.get('ends_at')
            }
        }
        fetch(`http://localhost:3000/api/v1/auctions`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
        })
    }

    render() {
        return (
            <main>
                <h1>Auction New Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title'></input>
                    </div>
                    <div>
                        <label htmlFor='description'>Description</label>
                        <textarea type='text' name='description'></textarea>
                    </div>
                    <div>
                        <label htmlFor='endsAt'>Ends At</label>
                        <input type='date' name='endsAt'></input>
                    </div>
                    <div>
                        <label htmlFor='reserve_price'>Reserve Price</label>
                        <input type='number' name='reserve_price'></input>
                    </div>
                    <input type='submit' value='Save' />
                </form>
            </main>
        )
    }
}

export default AuctionNewPage