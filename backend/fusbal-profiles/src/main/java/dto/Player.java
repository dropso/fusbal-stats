package dto;

public class Player {
    private final long id;
    private final String nickname;

    public Player(long id, String nickname) {
        this.id = id;
        this.nickname = nickname;
    }

    public long getId() {
        return this.id;
    }

    public String getNickname() {
        return this.nickname;
    }
}
