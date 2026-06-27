variable "region" {
  default = "ap-south-1"
}

variable "cluster_name" {
  default = "3-tier-eks-app"
}

variable "cluster_version" {
  default = "1.31"
}

variable "vpc_name" {
  default = "3-tier-vpc"
}

variable "vpc_cidr" {
  default = "10.20.0.0/16"
}
