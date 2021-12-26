 let rerenderEntireTree = () =>{
 };

let state = {
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
            {id: '2', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'},
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
};

export let addPost = () =>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessage = () =>{
    let newMessage = {
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.message.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessage) =>{
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;