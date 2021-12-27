let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', likesCount: '15'},
                {id: '2', message: 'It"s my first post.', likesCount: '7'},
                {id: '3', message: 'It"s my second post.', likesCount: '1'},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Yurii'},
                {id: '2', name: 'Vlad'},
                {id: '3', name: 'Ihor'},
                {id: '4', name: 'Stas'},
                {id: '5', name: 'Vitaliy'},
                {id: '6', name: 'Andriy'},
                {id: '7', name: 'Roman'}
            ],
            message: [
                {id: '1', message: 'Hi'},
                {
                    id: '2',
                    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
                },
                {id: '3', message: 'What are you working on?'}
            ],
            newMessageText: '',

        },
        sidebar: {
            friends: [
                {id: '1', name: 'Vlad'},
                {id: '2', name: 'Stas'},
                {id: '3', name: 'Andriy'},
            ],
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.message.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },

    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

}

export default store;
window.store = store;