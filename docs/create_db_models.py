# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker, backref
from datetime import datetime

Base = declarative_base()

class Flower(Base):
    """description: Table storing details of individual flower types available."""
    __tablename__ = 'flower'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    color = Column(String)
    price = Column(Float, nullable=False)

class Inventory(Base):
    """description: Table representing the inventory stock of flowers in the shop."""
    __tablename__ = 'inventory'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    flower_id = Column(Integer, ForeignKey('flower.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    last_updated = Column(DateTime, default=datetime.now, nullable=False)
    
    flower = relationship('Flower', backref=backref('inventory_entries'))

class Customer(Base):
    """description: Table for recording customer details and information."""
    __tablename__ = 'customer'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String)
    phone = Column(String)

class Order(Base):
    """description: Table for storing customer orders in the system."""
    __tablename__ = 'order'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customer.id'), nullable=False)
    order_date = Column(DateTime, default=datetime.now, nullable=False)
    total_amount = Column(Float, nullable=False, default=0.0)

    customer = relationship('Customer', backref=backref('orders'))

class OrderDetail(Base):
    """description: Junction table to capture individual flower items in orders."""
    __tablename__ = 'order_detail'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('order.id'), nullable=False)
    flower_id = Column(Integer, ForeignKey('flower.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    amount = Column(Float, nullable=False, default=0.0)
    
    order = relationship('Order', backref=backref('order_details'))
    flower = relationship('Flower', backref=backref('order_details'))

class Supplier(Base):
    """description: Table for details about suppliers who provide flowers."""
    __tablename__ = 'supplier'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    contact_name = Column(String)
    contact_email = Column(String)

class StockPurchase(Base):
    """description: Table for recording stock purchases from suppliers."""
    __tablename__ = 'stock_purchase'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    supplier_id = Column(Integer, ForeignKey('supplier.id'), nullable=False)
    flower_id = Column(Integer, ForeignKey('flower.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    purchase_date = Column(DateTime, default=datetime.now, nullable=False)
    
    supplier = relationship('Supplier', backref=backref('stock_purchases'))
    flower = relationship('Flower', backref=backref('stock_purchases'))

class Employee(Base):
    """description: Table recording flower shop employees."""
    __tablename__ = 'employee'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    position = Column(String)
    hire_date = Column(DateTime, default=datetime.now, nullable=False)

class WorkSchedule(Base):
    """description: Table for managing employee work schedules."""
    __tablename__ = 'work_schedule'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'), nullable=False)
    day_of_week = Column(String, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)

    employee = relationship('Employee', backref=backref('work_schedules'))

class Promotion(Base):
    """description: Table for recording promotions applied to flower sales."""
    __tablename__ = 'promotion'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(String)
    discount_percent = Column(Float, nullable=False)

class OrderPromotion(Base):
    """description: Junction table linking promotions to specific orders."""
    __tablename__ = 'order_promotion'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('order.id'), nullable=False)
    promotion_id = Column(Integer, ForeignKey('promotion.id'), nullable=False)

    order = relationship('Order', backref=backref('applied_promotions'))
    promotion = relationship('Promotion', backref=backref('order_promotions'))

class Feedback(Base):
    """description: Table collecting customer feedback on flowers or service."""
    __tablename__ = 'feedback'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customer.id'), nullable=False)
    comments = Column(String)
    rating = Column(Integer)

    customer = relationship('Customer', backref=backref('feedback_entries'))

# Set up the database engine and create all tables
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a session to interact with the database
Session = sessionmaker(bind=engine)
session = Session()

# Sample Data
flowers = [
    Flower(name="Rose", color="Red", price=1.5),
    Flower(name="Tulip", color="Yellow", price=1.0),
    Flower(name="Daisy", color="White", price=0.75)
]

customers = [
    Customer(first_name="John", last_name="Doe", email="john@example.com"),
    Customer(first_name="Jane", last_name="Smith", email="jane@example.com")
]

orders = [
    Order(customer_id=1, order_date=datetime.now(), total_amount=3.5),
    Order(customer_id=2, order_date=datetime.now(), total_amount=5.0)
]

order_details = [
    OrderDetail(order_id=1, flower_id=1, quantity=2, amount=3.0),
    OrderDetail(order_id=1, flower_id=2, quantity=1, amount=1.0),
    OrderDetail(order_id=2, flower_id=3, quantity=4, amount=3.0),
    OrderDetail(order_id=2, flower_id=1, quantity=2, amount=2.0)
]

suppliers = [
    Supplier(name="Garden Supplies", contact_name="Alice Green", contact_email="alice@gardensupplies.com"),
    Supplier(name="Field Blooms", contact_name="Bob Field", contact_email="bob@fieldblooms.com")
]

stock_purchases = [
    StockPurchase(supplier_id=1, flower_id=1, quantity=50, purchase_date=datetime.now()),
    StockPurchase(supplier_id=2, flower_id=2, quantity=75, purchase_date=datetime.now())
]

employees = [
    Employee(first_name="Lucas", last_name="Brown", position="Manager"),
    Employee(first_name="Emma", last_name="White", position="Sales Assistant")
]

work_schedules = [
    WorkSchedule(employee_id=1, day_of_week="Monday", start_time=datetime(2023, 1, 1, 9), end_time=datetime(2023, 1, 1, 17)),
    WorkSchedule(employee_id=2, day_of_week="Tuesday", start_time=datetime(2023, 1, 2, 10), end_time=datetime(2023, 1, 2, 18))
]

promotions = [
    Promotion(description="Spring Sale", discount_percent=10),
    Promotion(description="Holiday Discount", discount_percent=15)
]

order_promotions = [
    OrderPromotion(order_id=1, promotion_id=1),
    OrderPromotion(order_id=2, promotion_id=2)
]

feedbacks = [
    Feedback(customer_id=1, comments="Beautiful roses!", rating=5),
    Feedback(customer_id=2, comments="Loved the tulips.", rating=4)
]

# Add data to session and commit
session.add_all(flowers + customers + orders + order_details + suppliers + stock_purchases +
                employees + work_schedules + promotions + order_promotions + feedbacks)
session.commit()
