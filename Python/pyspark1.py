from pyspark.sql import SparkSession

# Initialize a SparkSession
spark = SparkSession.builder.appName("DataFrame Example").getOrCreate()

# Create a DataFrame from a list of tuples
data = [("Alice", 29), ("Bob", 34), ("Catherine", 23)]
columns = ["Name", "Age"]

df = spark.createDataFrame(data, columns)

# Show the DataFrame
df.show()

# Filter and select rows where Age is less than 30
filtered_df = df.filter(df.Age < 30).select("Name", "Age")
filtered_df.show()
