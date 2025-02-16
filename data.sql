create database if not exists blog
    character set utf8mb4
    collate utf8mb4_general_ci;

create table if not exists blog.settings
(
    password     VARCHAR(255) not null unique,
    user_name    VARCHAR(50)  not null unique,
    title        VARCHAR(255) not null unique,
    sub_title    VARCHAR(255) not null unique,
    display_name VARCHAR(50)  not null unique
);

insert into blog.settings (password, user_name, title, sub_title, display_name)
    values (sha1('123456789'), 'admin', 'admin的博客', '「Hello World!!」', 'ImAdmin');

create table if not exists blog.articles
(
    title       VARCHAR(255) not null,
    author      VARCHAR(50)  not null,
    time        TEXT     not null,
    content     LONGTEXT     not null,
    description LONGTEXT     not null
);

insert into blog.articles (title, author, time, content, description)
    values ('第一篇文章', 'ImAdmin', '2025/2/16 - 14:59','Hello World，这是我的第一篇文章', '我的第一篇文章');

create table if not exists blog.categories
(
    name        VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

insert into blog.categories (name, description)
    values ('默认', '这是博客默认分类');

CREATE TABLE blog.article_category
(
    article  VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL
);

insert into blog.article_category (article, category)
    values ('第一篇文章', '默认')
