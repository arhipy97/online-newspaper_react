const Comment = ({ comments }) => {
    return (
        <div>
            {
                comments.map((item) => <View key={item.id} {...item} />)
            }
        </div>
    );
}

const View = ({ name, body, email }) => {
    return (
        <div className="comment" >
            <div className="user_info">
                <div className="user_name">
                    <p>{name}</p>
                </div>
                <div className="user_email">
                    <p>{email}</p>
                </div>
            </div>
            <div className="user_body">
                {body}
            </div>
        </div >
    )
}

export default Comment