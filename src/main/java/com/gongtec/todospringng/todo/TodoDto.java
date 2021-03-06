package com.gongtec.todospringng.todo;

public class TodoDto {
  private long id;
  private String title;
  private String detail;
  private boolean done;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDetail() {
    return detail;
  }

  public void setDetail(String detail) {
    this.detail = detail;
  }

  public boolean getDone() {
    return done;
  }

  public void setDone(boolean done) {
    this.done = done;
  }
}
