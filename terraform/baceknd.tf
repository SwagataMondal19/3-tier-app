terraform {
  backend "s3" {
    bucket         = "terraform-state-poc-1004"
    key            = "3-tier-eks/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-state-poc-1004-lock"
    encrypt        = true
  }
}
