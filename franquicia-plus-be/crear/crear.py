import boto3

# Initialize an S3 client
s3 = boto3.client('s3', region_name='us-east-1')

# Define your bucket name (must be globally unique)
bucket_name = 'imagenesfranquiciaplusws1'

# Create the bucket in us-east-1 (default region for S3)
response = s3.create_bucket(
    Bucket=bucket_name,
    CreateBucketConfiguration={
        'LocationConstraint': 'us-east-1'
    }
)

# Print response
print(response)
