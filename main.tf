terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region     = "eu-north-1"
}


resource "aws_security_group" "lab6-sg" {
  name        = "lab6-sc"
  description = "Allow HTTP and SSH traffic via Terraform"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "app_server" {
  ami                         = "ami-064087b8d355e9051"
  instance_type               = "t3.micro"
  key_name                    = "iit-lab4"
  vpc_security_group_ids      = [aws_security_group.lab6-sg.id]
  associate_public_ip_address = true
  user_data                   = file("userdata.sh")
  tags = {
    Name = "Lab6"
  }
}