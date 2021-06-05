class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }
  announceFriendship(name) {
    global.console.log(`${name} is now a friend`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx == -1) {
      throw new Error('Friends no found !!');
    }

    this.friends.splice(idx, 1);
  }
}

//test

describe('FriendsList', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });
  it('initialize friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });
  it('adds a friend to the list', () => {
    friendsList.addFriend('parsa');
    expect(friendsList.friends.length).toEqual(1);
  });
  it('announce friend ship', () => {
    friendsList.announceFriendship = jest.fn();
    friendsList.addFriend('parsa');

    expect(friendsList.announceFriendship).toHaveBeenCalled();
  });

  describe('remove friend', () => {
    it('removes a friend from the list', () => {
      friendsList.addFriend('parsa-2');
      friendsList.removeFriend('parsa-2');

      expect(friendsList.friends[0]).toBeUndefined();
    });
    it('throw an error as friend does not exists', () => {
      expect(() => friendsList.removeFriend('parsa-2')).toThrow(new Error('Friends no found !!'));
    });
  });
});
