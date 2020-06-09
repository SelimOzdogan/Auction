import React from 'react';

function BidNewPage(props) {

    const { auction_id } = props;

    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
        const params = {
            bid: {
                bid: formData.get('bid'),
            }
        }
        fetch(`http://localhost:3000/api/v1/auctions/${auction_id}/bids`, {
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

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='number' name='bid'></input>
                </div>
                <input type='submit' value='Bid' />
            </form>
        </main>
    )
}

export default BidNewPage