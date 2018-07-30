package za.co.absa.idea.Idea;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Idea {

    @Id
    @GeneratedValue
    private Long id;

    private String heading;
    private String body;

    public Idea() { }

    public Idea(Long id, String heading, String body) {
        this.heading = heading;
        this.body = body;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getHeading() {
        return heading;
    }
    public void setHeading(String heading) {
        this.heading = heading;
    }
    public String getBody() {
        return body;
    }
    public void setBody(String body) {
        this.body = body;
    }
}
